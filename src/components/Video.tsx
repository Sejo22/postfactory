import React from 'react'

interface VideoProps {
    path: string;
}

export default function Video({ path }: VideoProps) {
    return (
        <video width={345} controls preload='metadata' disablePictureInPicture controlsList='nodownload nofullscreen noremoteplayback' muted>
            <source src={path} type='video/mp4' />
        </video>
    )
}
