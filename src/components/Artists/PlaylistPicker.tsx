import React, {useState} from 'react';
import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import {Playlist} from "@types/index.ts";
import {useUserPlaylists} from "../../hooks/hooks.ts";
import PickerPlaylistItem from "../MyMusic/PickerPlaylistItem.tsx";
import {nanoid} from "nanoid";

const PlaylistPicker = ({isPickerOpen, onPickerClose, trackId, previewUrl}) => {
    const [playlists, setPlaylists] = useState<Playlist[]>([])

    useUserPlaylists(setPlaylists, localStorage.getItem("currentUserId"))

    return (
        <Dialog open={isPickerOpen} onClose={onPickerClose} maxWidth={"lg"}>
            <DialogTitle className="text-center">Выберите плейлист для добавления</DialogTitle>
            <DialogContent className="grid grid-cols-3 bg-gray-12">
                {
                    playlists.map(playlist => (
                        <PickerPlaylistItem key={nanoid()} playlist={playlist} trackId={trackId} previewUrl={previewUrl} onPlaylistSelect={() => {}}/>
                    ))
                }
            </DialogContent>
        </Dialog>
    );
};

export default PlaylistPicker;