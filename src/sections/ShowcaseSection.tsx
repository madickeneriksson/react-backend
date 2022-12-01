
import LeftImage from "../assets/images/showcase-img-1.png";
import RightImage from "../assets/images/showcase-img-2.png";


const ShowcaseSection: React.FC = () => {
  return (
    <section className="__showcase container">
        <img className="left-img" src={LeftImage} alt="" />
        <div className="__showcase-body">
                <h1>SALE UP</h1>
                <h1>To 50% Off</h1>
        <p>Online shopping free home delivery over $100</p>
        <button className="__btn-theme">
            <span className="__btn-theme-left"></span>
            SHOP NOW
            <span className="__btn-theme-right"></span>
        </button>
    </div>
    <img className="right-img" src={RightImage} alt="" />
</section>
  )
}

export default ShowcaseSection