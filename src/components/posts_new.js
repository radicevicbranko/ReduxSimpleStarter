import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';


class PostsNew extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit(values) {
        this.props.createPost(values).then(() => {
            this.context.router.push('/');
        });
    }
    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className={'form-group ' + (title.touched && title.error && 'has-danger')}>
                    <label htmlFor="">Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                        {title.touched && title.error}
                    </div>
                </div>
                <div className={'form-group ' + (categories.touched && categories.error && 'has-danger')}>
                    <label htmlFor="">Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                        {categories.touched && categories.error}
                    </div>
                </div>
                <div className={'form-group ' + (content.touched && content.error && 'has-danger')}>
                    <label htmlFor="">Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                        {content.touched && content.error}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Title is required!"
    }
    if (!values.categories) {
        errors.categories = "Categories is required!"
    }
    if (!values.content) {
        errors.content = "Content is required!"
    }

    return errors;
}


export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);