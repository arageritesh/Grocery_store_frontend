

import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import Image from "next/image";
import Footer from "./_components/Footer";
import CategoryList from "./_components/CategoryList";

const Home = async () => {

  const sliderList = await GlobalApi.getSliders();
  const categoryList = await GlobalApi.getCategoryList();
  const productList = await GlobalApi.getAllProducts();
  console.log("Category list is :" ,categoryList);

  return(
    <div className="p-10">

      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList}/>
      <ProductList productList={productList} />
      <Image 
        src="/gh.png" 
        width={100} 
        height={300}
        alt="banner"
        className='w-full h-[400px] object-contain mt-10'
      />
      <Footer/>
    </div>
  );
}

export default Home;
