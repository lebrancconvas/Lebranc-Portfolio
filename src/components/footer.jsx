import React , {Component} from 'react'
import styled from 'styled-components'

const Foot = styled.footer`
    position:absolute;
    bottom:0;
    width:100%;
    height:5px;
    padding-top: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: black;
    color: white;
    padding-top: 10px;
    padding-bottom: 5.4%;
`

class Footer extends Component {
    render() {
        return(
            <Foot>
                Lebranc Convas © 2019 
            </Foot>
        )
    }
}

export default Footer