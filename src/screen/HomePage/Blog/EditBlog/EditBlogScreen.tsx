import React from 'react';
import { View } from 'react-native';
import renderTitleCreate from './RenderTitleEdit';
import renderInputCreateBlog from './RenderInputEditBlog';
import editblog from '../../../../styles/HomePage/Blog/EditBlog/EditBlogScreen';
import renderButtonCreateBlog from './RenderButtonEditBlog';
const EditBlogScreen = () =>{
    return (
        <View style={editblog.container}>
            {renderTitleCreate()}
            {renderInputCreateBlog()}
            {renderButtonCreateBlog()}
        </View>
    );
};
export default EditBlogScreen;
