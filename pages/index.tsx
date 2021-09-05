import type { NextPage } from 'next'
import Link from 'next/Link'
import styled from 'styled-components';

import HomeLayout from '../components/home/HomeLayout'

const HomeContentWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: #dadada;
  & > .explan_container {
    display: flex;
    flex-direction: column;
    justify-content:center;
    /* background-color: #4d4d4d; */
    width: 1200px;
    height:50%;
    & > .explan_text{
      width:50%;
    }
    & > .explan_button{
      margin: 10px;
      width:10%;
    }
  }
`

const Home: NextPage = () => {
  return (
    <HomeLayout >
      <HomeContentWrapper>

        <div className='explan_container'>
          <div className='explan_text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates reprehenderit accusantium incidunt illum est, fugit enim ex ab quas. Nulla excepturi enim vero molestiae rem ea sit quae pariatur?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis minus itaque recusandae facilis mollitia explicabo, ducimus eum nihil perspiciatis exercitationem officia consequatur! Explicabo incidunt tempore velit quaerat ab. Nostrum, ex?
          </div>
          <Link href='/selectnovel'>
            <button className='explan_button'>
              콘솔로 가기
            </button>
          </Link>

        </div>
      </HomeContentWrapper>
    </HomeLayout >
  )
}

export default Home
