import type { NextPage } from 'next'
import Link from 'next/Link'
import styled from 'styled-components';

import NovelLayout from '../../components/novel/NovelLayout'

const HomeContentWrapper = styled.div`
  display: flex;
  justify-content:center;
  align-content: center;
  width: 100%;
  background-color: #dadada;

`

const Home: NextPage = () => {
    return (
        <NovelLayout >
            <HomeContentWrapper>
                asd
                <Link href='/selectnovel'>
                    <button>
                        콘솔로 가기
                    </button>
                </Link>
            </HomeContentWrapper>
        </NovelLayout >
    )
}

export default Home
