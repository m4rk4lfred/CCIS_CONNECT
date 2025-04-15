import './App.css';


function CardBox(props){
    return(
        <>
           <div className="card-container">
              <div className="image-container">
                <img src= {props.imageSrc} alt="image.png" />
              </div>
              <p>HELLO CCIS</p>
           </div>
        </>
    );
} 
export default CardBox;