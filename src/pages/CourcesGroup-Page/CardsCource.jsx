import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export default function CardsCource({ data , category}) {


  return (
    <Card style={{ width: '18rem', direction: "rtl" , textAlign: 'center' }}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          در اینجا خلاصه ای از ویژگی های دوره نوشته می شود.
          در اینجا خلاصه ای از ویژگی های دوره نوشته می شود.
        </Card.Text>
        <Link to={`/cource/${category}/${data.courceID}`}>
        <Button variant="primary">مشاهده دوره</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}
