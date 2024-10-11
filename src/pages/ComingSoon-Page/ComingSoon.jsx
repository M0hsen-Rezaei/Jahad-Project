import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'
import Layout from '../../components/Layout';

export default function ComingSoon() {
  return (
    <Layout>
      <div className='ComingSoon'>
        <h3>Coming Soon</h3>
        <CircularProgress></CircularProgress>
      </div>
    </Layout>
  )
}
