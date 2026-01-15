import Image from "next/image";

interface Props {
  description: string;
  imageUrl: string;
  altText: string;
}

const CultureImageText = ({ description, imageUrl, altText }: Props) => {
  return (
    <div className="space-y-14 
    sm:pr-16
    pr-4">
      <p className="body-2 pt-7 text-gray-400">
        {description}
      </p>
      <div className="relative sm:w-129.75 sm:h-71.75
        w-full h-71.75">
        <Image
            src={imageUrl}
            alt={altText}
            // width={519}
            // height={287}
            fill
            className="object-cover rounded-lg"
            />
        </div>
    </div>
  );
};

export default CultureImageText;
