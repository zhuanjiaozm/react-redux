import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadPostsAction from '../actions/post_action';

class PostList extends Component {
    constructor(props) {
        super(props);
        console.log('props:', props);
    }
    componentDidMount() {
        // 加载远程数据
        this.props.dispatch(loadPostsAction);
    }
    render() {
        const { list } = this.props.post;
        const Posts = list.map(post => (<li className="list-group-item" key={post.id}><span className="badge">{post.id}</span> {post.name} </li>))
        return (
            <div>
                <ul className="list-group">{Posts}</ul>
            </div>
        )
    }
}
// 通过连接组件和redux数据
const mapStateToProps = (state, ownProps) => {
    return {
        post: state.post
    }
}
export default connect(mapStateToProps)(PostList);