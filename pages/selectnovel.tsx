import type { NextPage } from 'next'
import Link from 'next/Link'
import styled from 'styled-components';

import HomeLayout from '../components/home/HomeLayout'

const SelcetNovelWrapper = styled.div`
 @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content:start;
    align-items: center;
    width: 100%;
    /* background-color: #970000; */

    & > .backgrand_design {
          width:   100%;
          height: 200px;
          background-color: #a3a3a3;
          position: relative;
          z-index: 0;
        }
        
        &> .novel_container{
            width: 1200px;
            height: 1000px;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content:space-around;

            & > .main_novel{
                width: 100%;
                & > .main_novel_item{
                    width: 100%;
                    height: 300px;
                    border: 1px solid black;
                    background-color: white;
                }
            }
            & > .all_novel{
                width: 100%;
                & > .all_novel_list{
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-content: center;
                 & > .all_novel_item{
                    width: 30%;
                    height: 300px;
                    border: 1px solid black;
                    background-color: white;
                 }
                }
            }
    }
}
`

const Home: NextPage = () => {
    return (
        <HomeLayout >
            <SelcetNovelWrapper>
                <div className='backgrand_design'></div>

                <div className='novel_container'>
                    <div className='main_novel'>
                        <p className='main_text'>현제 메인 프로젝트</p>
                        <div className='main_novel_item'></div>
                    </div>
                    <div className='all_novel'>
                        <p className='all_text'>현제 메인 프로젝트</p>
                        <div className='all_novel_list'>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                            <div className='all_novel_item'></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </SelcetNovelWrapper>
        </HomeLayout >
    )
}

export default Home
