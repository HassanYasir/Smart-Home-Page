import { Swiper, SwiperSlide,} from "swiper/react";
import { Pagination } from 'swiper/modules';
import { useState,useEffect } from "react";
// import PropTypes from 'prop-types';
import "swiper/css";
import 'swiper/css/pagination';
import "../App.css";

function NewsContainer(prop) {
  let defaultImage = "https://img.freepik.com/premium-vector/no-data-found-illustration-sites-banner-design-vector-illustration_620585-1690.jpg?semt=ais_hybrid"
  const [articles,Setarticles] = useState([])
  const [loading,Setloading] = useState(false);


  useEffect(()=>{
    async function getData(category) {

      let url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${prop.apiKey}&pageSize=${prop.pageSize}`
      try{
        
        Setloading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        return parsedData.articles;
        
        
      }catch(err){
        console.log(err);
      }finally{
        Setloading(false);
      }
      
      
    }

    async function handlefetch() {
      const cached = prop.dataCach.find(item => item.category === prop.category);
      if(!cached){
        let data = await getData(prop.category);
        Setarticles(data);
        prop.AdddataCach({category:prop.category,articles:data})
      }else{
        
        Setarticles(cached.articles);

      }
    }
    
    handlefetch();
    console.log(prop.dataCach)



  },[prop.category]);



  return (
    <div className="News">
      {loading && <div className="loading"></div>}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        
        
        >
        

        {!loading && articles && articles.map((elem) => {
          if(elem.description !== null){
            return (
              <SwiperSlide key={elem.url}>
                
              <div className="news-cont">
                <img
                  src={elem.urlToImage?elem.urlToImage:defaultImage}
                  alt="news-image"
                  loading="lazy"
                />
                <div className="content">
                  <h3>{elem.title.slice(0,43)}...</h3>
                  <p>
                    {elem.description.slice(0,88)}...
                  </p>
                  <div className="btn-cont">
                  <a href={elem.url} target="_blank"><button className="news-btn">Read more</button></a>
                  <div className="writen-date">{elem.publishedAt.slice(0,10)}</div>
                  <div className="source">{elem.source.name.slice(0,14)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            
  
            );
          }
          
        })}
      </Swiper>
    </div>
  );
}

// NewsContainer.protoTypes ={
//   catogary : PropTypes.string
// }
export default NewsContainer;
