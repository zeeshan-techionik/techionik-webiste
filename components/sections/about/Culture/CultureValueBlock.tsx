import Image from "next/image";

interface CulturalItem {
  icon: string;
  title: string;
  description: string;
}

interface CultureValueBlockProps {
  items: CulturalItem[];
}

const CultureValueBlock = ({ items }: CultureValueBlockProps) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex items-center gap-2.5 pb-4.5">
            <div className="w-12 h-12 border p-1.5 rounded-full flex items-center justify-center bg-[#26262B] border-[#26262B]">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="object-fit"
              />
            </div>
            <h2>{item.title}</h2>
          </div>

          <p className="body-2">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default CultureValueBlock;
