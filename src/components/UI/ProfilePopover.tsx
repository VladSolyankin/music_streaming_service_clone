import React from 'react';
import {Button, Popover} from "antd";
import {useNavigate} from 'react-router-dom'
import {useFirebaseStorage} from "../../hooks/hooks.ts";

const ProfilePopover = ({children, isProfileOpen, onProfileOpen}) => {
    return (
        <Popover
            content={<Profile />}
            trigger="click"
            open={isProfileOpen}
            onOpenChange={onProfileOpen}
        >
            {children}
        </Popover>
    );
};

const Profile = () => {
    const navigate = useNavigate()
    const profilePicture = useFirebaseStorage('example.jpg')

    const onExitClick = () => {
        navigate('/')
        localStorage.clear()
    }

    return (
        <div className="flex flex-col justify-center items-center text-lg gap-3">
            <span className="font-bold">Профиль</span>
            <div className="flex items-center gap-5">
                <div className="rounded-3xl border-2 border-black h-12 w-12 flex items-center justify-center">
                    <img src={profilePicture} alt="" className="w-10 h-10 rounded-3xl"/>
                </div>
                <div className="flex flex-col">
                    <span>Email: vlad.solyankin@mail.ru</span>
                    <span>Phone: +7911111111</span>
                </div>
            </div>

            <Button size="large">Сменить почту</Button>
            <Button size="middle" type="primary" danger={true} onClick={() => onExitClick()}>Выйти</Button>
        </div>
    )
}

export default ProfilePopover;