import React from 'react';
import Layout from '@theme/Layout';
import {NoPageComponent} from "../containers";

export default function NotFound() {
  return (
    <Layout
      title="Page Not Found">
      <main>
        <NoPageComponent />
      </main>
    </Layout>
  );
}