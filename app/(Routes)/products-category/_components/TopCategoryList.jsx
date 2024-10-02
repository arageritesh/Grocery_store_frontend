
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function TopCategoryList({categoryList,selectedCategory}) {
  return (
    <div>
      <div className='flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center'>
        {categoryList.map((category, index) => {
          const iconData = category?.attributes?.icon?.data;
          if (!iconData || iconData.length === 0) {
            console.error("Icon URL is missing for category:", category);
            return null; // Skip rendering if icon URL is missing
          }
          const iconUrl = iconData[0]?.attributes?.url;
          const fullIconUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${iconUrl}`;
          const categoryName = encodeURIComponent(category.attributes.name);
           console.log(fullIconUrl);
          return (
            <Link
              href={`/products-category/${categoryName}`}
              key={index}
              className={`flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer
               hover:bg-green-200 w-[150px] min-w-[100px]${selectedCategory==category&&'bg-green-600 text-white'}`} 
            >
              <Image
                src={fullIconUrl}
                unoptimized={true}
                alt='icon'
                width={50}
                height={50}
                className='hover:scale-125 transition-all ease-in-out'
              />
              <h2 className={`text-green-900 group-hover:text-white ${selectedCategory==category&&'bg-green-900 text-white'}`}>{category?.attributes?.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  )
}

export default TopCategoryList
