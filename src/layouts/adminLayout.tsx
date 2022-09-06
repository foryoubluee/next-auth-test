import { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import React, { Component } from 'react'

const AdminLayout: NextPage = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">{children}</div>
    </div>
  )
}

export default AdminLayout
