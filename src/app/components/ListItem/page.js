import Image from "next/image";
import React from "react";
import product1 from "@/app/images/product1.jpg";
import Link from "next/link";

export default function ListItem({ id, category = {}, price }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link href={`components/ListItem/${id}`}>
        <Image
          priority
          width={300}
          height={500}
          src={category?.image ? category.image : product1}
          alt={category?.name || "Product image"}
          style={{ width: "100%", height: "auto" }}
        />
      </Link>
      <div className="text-3xl font-bold">
        {category?.name ? category.name : "Product"}
      </div>
      <div className="text-2xl text-red-700">Price: {price} $</div>
    </div>
  );
}
