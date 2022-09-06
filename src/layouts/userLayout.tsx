import { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import React, { Component } from 'react'
import Navbar from '../components/Navbar'

interface Props {
  children: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div className='p-6'>{children}</div>
      </div>
    </div>
  )
}

export default UserLayout
