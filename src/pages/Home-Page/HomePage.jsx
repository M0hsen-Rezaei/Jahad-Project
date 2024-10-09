import React from 'react'
import Layout from '../../components/Layout'
import Slider from './Slider'
import Courses from './Cources'


export default function HomePage() {
  return (
    <Layout>
      <Slider></Slider>
      <Courses></Courses>
    </Layout>
  )
}
