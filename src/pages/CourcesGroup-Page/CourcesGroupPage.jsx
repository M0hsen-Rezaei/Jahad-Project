import React from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../../components/Layout'
import CardCource from './CardsCource';
import CoursesData from '../../data/CoursesData'
import { useParams } from 'react-router-dom';


export default function CourcesGroupPage({ titleCource }) {
  const { category } = useParams()

  const cources = CoursesData[category].sub
  const items = Object.keys(cources).map((key) => {
    return (
      <CardCource data={CoursesData[category].sub[key]} category={category}></CardCource>
    )
  })

  return (
    <Layout>
      <h1 className='titleGroup'>{CoursesData[category].name}</h1>
      <div className='cards'>
      {items}
      </div>
    </Layout>
  )
}
