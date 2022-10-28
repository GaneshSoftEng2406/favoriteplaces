import React,{useState} from 'react';
import Categories from './Categories';

const Category = () => {
    const [data,setData]=useState(Categories);
    const filterResult =(catItem)=>{
       const result = Categories.filter((curData)=>{
          return curData.category===catItem;
       });
       setData(result)
    }
  return (
    <>
        <h1 className='text-center text-info'>let's Joy</h1>
        <div className='container--fluid mx-2'>
            <div className='row mt-5 mx-2'>
                <div className='col-md-3'>
                    <button className='btn btn-warning w-100 mb-4' onClick={()=>filterResult('waterFall')}>WaterFall</button>
                    <button className='btn btn-warning w-100 mb-4'  onClick={()=>filterResult('gardens')} >Gardens </button>
                    <button className='btn btn-warning w-100 mb-4'  onClick={()=>filterResult('park')} >National Parks</button>
                    <button className='btn btn-warning w-100 mb-4'  onClick={()=>filterResult('hills')} >Hills</button>
                    <button className='btn btn-warning w-100 mb-4'  onClick={()=>filterResult('island')} >Island</button>
                    <button className='btn btn-warning w-100 mb-4' onClick={()=>setData(Categories)} >All</button>
               
                </div>
                <div className='col-md-9'>
                    <div className='row'>
                        {
                            data.map((values)=>{
                                const {id,img,Title,Rating,Price,Description}=values
                                return(
                                    <>
                        <div className='col-md-4 mb-4' key={id}>
                          <div className='card'>
  <img src={img} className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{Title}</h5>
    <p>Rate: {Rating} /5</p>
    <p>Price: $ {Price}</p>
    <p className="card-text">{Description}</p>
    <button className="btn btn-dark">
        Buy Now </button>
  </div>
</div>

  
                              
                          </div>
                                    </>
                                )
                            })
                        }


                          

                    </div>
               
               </div>
            </div>

        </div>
    </>
  )
}

export default Category;



