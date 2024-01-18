import React from 'react';
import {PlaylistItemProps} from "@types/index.ts";

const PlaylistItem: React.FC<PlaylistItemProps> = ({ playlist, onPlaylistSelect }) => {
    return (
        <div key={playlist.id}>
            <div className="bg-gray-100 p-2 rounded flex items-center">
                <button onClick={() => onPlaylistSelect(playlist.imagePath, playlist.title)}>
                    <img className="w-44 h-44 rounded mr-2 hover:scale-90 duration-150"
                         src={playlist.imagePath} alt={playlist.title} />
                </button>
            </div>
            <h2 className="text-white text-xl text-center">
                {playlist.title}
            </h2>
        </div>
    );
};

export default PlaylistItem;