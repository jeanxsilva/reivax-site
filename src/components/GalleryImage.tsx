'use client'
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

type ComponentProps = {
    image: { link: string }
}

const GalleryImage = ({ image }: ComponentProps) => {

    const redirect = (target: '_blank', link: string) => {
      window.open(link, target);
    }

    return (
        <div className="gallery-box">
            <Image src="/generic.jpeg" alt="Imagem de galeria" width={600} height={400} className="gallery-image w-full object-cover" />
            <div className="gallery-image-hover" onClick={() => redirect("_blank", image.link)}>
                <FaInstagram size={50} />
            </div>
        </div>
    );
};

export default GalleryImage;