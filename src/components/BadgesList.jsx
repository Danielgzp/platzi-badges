import React from 'react';
import './styles/BadgeList.css'
import twitterLogo from '../images/twitter.png'

// import './styles/BadgesList.css';

// class BadgesListItem extends React.Component {
//   render() {
//     return (
//       <div className="BadgesListItem">
//         <img
//           className="BadgesListItem__avatar"
//           src={this.props.badge.avatarUrl}
//           alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
//         />

//         <div>
//           <strong>
//             {this.props.badge.firstName} {this.props.badge.lastName}
//           </strong>
//           <br />@{this.props.badge.twitter}
//           <br />
//           {this.props.badge.jobTitle}
//         </div>
//       </div>
//     );
//   }
// }

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id}>
                
                <img src={badge.avatarUrl} alt="Avatar" className="avatar"/>
                
                <div className="info-container">
                  <p className="name">
                      {badge.firstName} {badge.lastName}
                  </p>
                  <p className="twitter-username"> <img src={twitterLogo} alt="Logo Twitter" className="twitter-logo"/> @{badge.twitter}</p>
                  <p className="job-name">{badge.jobTitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;