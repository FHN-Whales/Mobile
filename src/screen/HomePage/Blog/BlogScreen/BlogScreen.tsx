import React from 'react';
import { View } from 'react-native';
import renderTitleBlog from './RenderTitleBlog';
import renderSearchBlog from './RenderSearchBlog';
import renderItemBlog from './RenderItemBlog';
import renderButtonCreateBlog from './RenderButtonCreaeBlog';
import blog from '../../../../styles/HomePage/Blog/BlogScreen/BlogScreen';
const  BlogScreen = () =>{
    return (
        <View style={blog.container}>
            {renderTitleBlog()}
            {renderSearchBlog()}
            {renderButtonCreateBlog()}
            {renderItemBlog()}
        </View>
    );
};
export default BlogScreen;
