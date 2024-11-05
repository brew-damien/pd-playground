import React from 'react';

const CommentBox = () => {

    return (
        <div className="flex items-center justify-center">
            <form className="relative w-full">
                <input
                    type="text"
                    placeholder="Add a comment..."
                    className="bg-gray-100 border border-gray-300 rounded-full w-full py-[10px] px-4 text-gray-700 transition"
                />
                <button
                    type="submit"
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-semibold py-[6px] px-4 mr-[6px] rounded-full ">
                    Send
                </button>
            </form>
        </div>
    );
};

export default CommentBox;
