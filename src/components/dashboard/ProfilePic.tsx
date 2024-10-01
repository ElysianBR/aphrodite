import React from 'react'
import stringToGradient from '@/utils/stringToGradient';
import Account from '@/provider/requests/Account';

export interface Props {
    name: string;
    setChanged: React.Dispatch<React.SetStateAction<boolean>>;
    imageState: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];
}

export default function ProfilePic(props: Props) {
    const [imageState, setImageState] = props.imageState
    const [upload, setUpload] = React.useState(false);

    const mouseHoverHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setUpload(true)
    }

    const mouseOutHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setUpload(false)
    }

    const mouseClickUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        const file = target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                let imageTemp = reader.result as string;
                setImageState(imageTemp);
                setUpload(false)
                props.setChanged(true);
            }
            reader.readAsDataURL(file);
        }
    }

    return (
        <div
            onMouseOver={mouseHoverHandler}
            onMouseOut={mouseOutHandler}
        >
            <label htmlFor="photo-upload" className='upload-label'>
                <div
                    className={`avatar ${upload ? ' blur-avatar' : ''}`}
                    style={{
                        backgroundImage: `url(${imageState}), ${stringToGradient(props.name)}`
                    }}
                >
                    {!imageState && (
                        <svg className='letterPlaceholder' viewBox="0 0 50 50">
                            <text x="50%" y="55%" className='letterText' textAnchor="middle" alignmentBaseline="middle">
                                {Array.from(props.name)[0].toUpperCase()}
                            </text>
                        </svg>
                    )}
                </div>
                {upload && (
                    <>
                        <img src='./upload.png' className={`upload-img ${upload ? 'show' : ''}`} alt="Upload" />
                        <input
                            id="photo-upload"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={mouseClickUpload}
                        />
                    </>
                )}
            </label>
        </div>
    )
}
