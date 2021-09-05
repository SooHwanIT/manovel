import type { NextPage } from 'next'

import styled from 'styled-components';
const HomeHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: absolute;
    top: 0;

    width: 100%;
    height: 5vh;
    background-color: #c0c0c0; // 해더 백그라운드 컬러 

    z-index: 10;
`
const UserWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const HomeLayout: NextPage = ({ children }) => {
    return (
        <div >
            <HomeHeaderWrapper>
                <div> novel </div>
                <UserWrapper>
                    <div>user_name</div>
                    <div>profile</div>
                </UserWrapper>
            </HomeHeaderWrapper>
            {children}
        </div >
    )
}

export default HomeLayout;
