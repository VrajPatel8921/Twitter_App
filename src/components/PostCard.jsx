import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({
    $id,
    title,
    content,
    featuredImage,
    author,
}) => {
    return (
        <Link to={`/post/${$id}`} >
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-4">
                {/* Author */}
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                        {author}
                    </span>
                </div>

                {/* Content */}
                <p className="text-gray-800 dark:text-gray-200 mb-3 text-3xl">{title}</p>
                <p className="text-gray-800 dark:text-gray-200 mb-3">{content}</p>

                {/* Image */}
                {featuredImage && (
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt="Post"
                        className="w-full h-auto rounded-lg border border-gray-200 dark:border-gray-700"
                    />
                )}
            </div>
        </Link>
    )
}

export default PostCard