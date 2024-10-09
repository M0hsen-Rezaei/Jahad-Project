import React, { useEffect, useState, useContext } from 'react'
import Layout from '../../components/Layout'
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamIcon from '@mui/icons-material/Videocam';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import './style.css'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import { useParams } from 'react-router-dom'
import CoursesData from '../../data/CoursesData'
import { BuyCources } from '../../Contexts/BuyContext';


export default function CourceSinglePage() {

  const Buy = useContext(BuyCources)
  const [showcource, setShowcource] = useState()
  const [ShowAlert, setShowAlert] = useState()
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
        setShowAlert(false);
    }, 3000);
};
  const { ID, category } = useParams()
  const cources = Object.keys(CoursesData[category].sub).map((cource) => {
    if (CoursesData[category].sub[cource].courceID == ID) {
      return CoursesData[category].sub[cource]
    } else {
      return null
    }
  })

  useEffect(() => {
    cources.forEach((cource) => {
      if (cource != null) {
        setShowcource(cource);
      }
    });
  }, [])



  return (
    <Layout>
      {ShowAlert && <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
        <p>این محصول با موفقیت به سبد خرید شما اضافه شد</p>
      </Alert>}
      {showcource && (<div id='CourcePage'>
        <div className='section1'>
          <div className='CourceTitle'>
            <p className='CourceName'>{showcource.name}</p>
            <img className='CourceImg' src={showcource.img} alt="" />
          </div>
          <div className='CourceSummary'>
            <p className='CourcePrice'>{showcource.price} تومان</p>
            <ul className='ListFeature'>
              <li className='FeatureCource'>
                <AccountCircle></AccountCircle>
                <p className='TitleList'>مدرس :</p>
                <p className='ItemList'>{showcource.teacher}</p>
              </li>
              <li className='FeatureCource'>
                <VideocamIcon></VideocamIcon>
                <p className='TitleList'>تعداد جلسات :</p>
                <p className='ItemList'>{showcource.sessions}</p>
              </li>
              <li className='FeatureCource'>
                <AccessTimeIcon></AccessTimeIcon>
                <p className='TitleList'>مدت زمان :</p>
                <p className='ItemList'>{showcource.time}</p>
              </li>
              <li className='FeatureCource'>
                <MenuBookIcon></MenuBookIcon>
                <p className='TitleList'>سطح دوره :</p>
                <p className='ItemList'>{showcource.level}</p>
              </li>
            </ul>
            <Button onClick={() => {
              Buy.addToBuyList(showcource.courceID, showcource.name, showcource.img, showcource.price);
              handleShowAlert()
            }}
              className='BtnBuy' variant="success">افزودن به سبد خرید <ShoppingCart /></Button>
          </div>
        </div>
        <div className='section2'>
          <p className='TitleSection2'>توضیحات :</p>
          <p className='CourceDescription'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>)}

    </Layout>
  )
}
