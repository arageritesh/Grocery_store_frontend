import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function CategoryList({ categoryList }) {
  console.log("Rendering CategoryList with categoryList:", categoryList);
  if (!Array.isArray(categoryList)) {
    console.error("Expected categoryList to be an array");
    console.log(categoryList);
    return null;
  }

  return (
    <div className='mt-5'>
      <h2 className='text-green-600 font-bold text-2xl'>Shop by category</h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
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
              className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200'
            >
              <Image
                src={fullIconUrl}
                unoptimized={true}
                alt='icon'
                width={50}
                height={50}
                className='hover:scale-125 transition-all ease-in-out'
              />
              <h2 className='text-green-800'>{category?.attributes?.name}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// function CategoryList({ categoryList }) {
//   if (!Array.isArray(categoryList) || categoryList.length === 0) {
//     console.error("Expected categoryList to be a non-empty array:", categoryList);
//     return null;
//   }

//   return (
//     <div className='mt-5'>
//       <h2 className='text-green-600 font-bold text-2xl'>Shop by category</h2>
//       <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
//         {categoryList.map((category, index) => {
//           const iconData = category?.attributes?.icon?.data;
//           if (!iconData || iconData.length === 0) {
//             console.error("Icon URL is missing for category:", category);
//             return null; // Skip rendering if icon URL is missing
//           }
//           const iconUrl = iconData[0]?.attributes?.url;
//           const fullIconUrl = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${iconUrl}`;
//           const categoryName = encodeURIComponent(category.attributes.name);

//           return (
//             <Link
//               href={`/products-category/${categoryName}`}
//               key={index}
//               className='flex flex-col items-center bg-green-50 gap-2 p-3 rounded-lg group cursor-pointer hover:bg-green-200'
//             >
//               <Image
//                 src={fullIconUrl}
//                 unoptimized={true}
//                 alt='icon'
//                 width={50}
//                 height={50}
//               //  layout="responsive"
//                 className='hover:scale-125 transition-all ease-in-out'
//               />
//               <h2 className='text-green-800'>{category?.attributes?.name}</h2>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CategoryList;


