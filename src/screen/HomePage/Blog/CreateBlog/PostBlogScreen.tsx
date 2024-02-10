import React from 'react';
import { View } from 'react-native';
import renderTitleCreate from './RenderTitleCreate';
import renderInputCreateBlog from './RenderInputCreateBlog';
import postblog from '../../../../styles/HomePage/Blog/CreateBlog/PostBlogScreen';
import renderButtonCreateBlog from './RenderButtonCreateBlog';
const PostBlogScreen = () =>{
    return (
        <View style={postblog.container}>
            {renderTitleCreate()}
            {renderInputCreateBlog()}
            {renderButtonCreateBlog()}
        </View>
    );
};
export default PostBlogScreen;
