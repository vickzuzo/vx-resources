import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";

interface IProps {
  id: string;
  title: string;
  views: number;
  slug: string;
  image: string;
}

export const ResourceCard: React.FC<IProps> = ({
  id,
  views,
  image,
  title,
  slug,
}) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={`/resource/${slug}`}>
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={slug}
              width={384}
              height={440}
              className="h-full rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-white paragrahp-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image
            src="/downloads.svg"
            alt="downlooad-icon"
            width={20}
            height={20}
          />
          {views}
        </div>
        <Link
          href={`resource/${slug}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" alt="download" width={13} height={10} />
        </Link>
      </CardContent>
    </Card>
  );
};
