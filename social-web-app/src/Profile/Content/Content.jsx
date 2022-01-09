import React, {Component} from 'react';
import './Content.css'

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                <img src="https://sun9-28.userapi.com/impg/1y_m2YWC85fh4zdlyq60cpztFfpcFPogzfdKnw/DIxREY8BCMM.jpg?size=810x1080&quality=96&sign=a7193cb8b0f274a7e9ad2ba08085db8c&type=album" />
                <div className='information'>
                    <p><b>Имя:</b> Владося</p>
                    <p><b>Пол:</b> Мужской</p>
                    <p><b>Возраст:</b> 19 лет</p>
                </div>
            </div>
        );
    }
}