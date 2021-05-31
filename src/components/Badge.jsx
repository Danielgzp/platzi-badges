import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'

const Badge = ({twitter, avatarUrl, firstName, lastName, jobTitle}) => (
    <div className="badgee">
        <div className="badgee_header">
            <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badgee_section-name">
            <img src={avatarUrl} alt="Avatar" className="badgee_avatar"/>
            <h1 className="">{firstName} <br /> {lastName}</h1>
        </div>
        <div className="badgee_section-info">
            <h3>{jobTitle}</h3>
            <div>@{twitter}</div>
        </div>
        <div className="badgee_footer">
            #platziconf
        </div>
    </div>
)

export default Badge