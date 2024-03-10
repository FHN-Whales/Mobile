/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {FlatList, Text, View, Button} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface Medication {
  medicationName: string;
  dosage: number;
}

interface Treatment {
  timeOfDay: string;
  medications: Medication[];
  treatmentTime: string;
}

interface User {
  _id: string;
  username: string;
}

interface TreatmentReminder {
  user: User;
  treatmentInfo: Treatment[];
}

const RenderTreatmentRemindScheduling = () => {
  const {data, isLoading, isError, refetch} = useQuery<TreatmentReminder[]>({
    queryKey: ['treatmentReminders'],
    queryFn: async () => {
      try {
        const familyId = await AsyncStorage.getItem('familyId');
        const userId = await AsyncStorage.getItem('userId');

        const response = await axios.get<TreatmentReminder[]>(
          `http://3.25.181.251:8000/Reminder/getTreatmentRemindersByUserId/${familyId}/${userId}`,
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
        console.log('familyId', familyId);
        console.log('userId', userId);
        console.log('data', response.data);
        // Parse chuỗi JSON thành đối tượng JavaScript
        const responseDataJson = JSON.stringify(response.data);
        console.log('responseDataJson', responseDataJson);
        if (response.status === 200) {
          return response.data;
        } else if (response.status === 404) {
          throw new Error('Data not found');
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        throw new Error('Failed to fetch data');
      }
    },
  });
  const handleRefresh = () => {
    refetch();
  };

  if (isError) {
    return <Text>Error fetching data</Text>;
  }
  return (
    <View>
      <Button title="Refresh" onPress={handleRefresh} />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text>Username: {item.user.username}</Text>
            <FlatList
              data={item.treatmentInfo}
              keyExtractor={(subItem, subIndex) => subIndex.toString()}
              renderItem={({item: subItem}) => (
                <View style={{marginLeft: 20}}>
                  <Text>Time of Day: {subItem.timeOfDay}</Text>
                  <Text>Treatment Time: {subItem.treatmentTime}</Text>
                  <Text>Medications:</Text>
                  <FlatList
                    data={subItem.medications}
                    keyExtractor={(medication, medicationIndex) =>
                      medicationIndex.toString()
                    }
                    renderItem={({item: medication}) => (
                      // eslint-disable-next-line react-native/no-inline-styles
                      <View style={{marginLeft: 20}}>
                        <Text>
                          - Medication Name: {medication.medicationName}
                        </Text>
                        <Text> Dosage: {medication.dosage}</Text>
                      </View>
                    )}
                  />
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};
export default RenderTreatmentRemindScheduling;
