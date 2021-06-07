import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

import twitterLogo from '../images/twitter.png'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div className="info-container">
          <p className="name">
            {this.props.badge.firstName} {this.props.badge.lastName}
          </p>
          <p className="twitter-username"><img src={twitterLogo} className="twitter-logo" alt="Logo twitter" /> @{this.props.badge.twitter} </p>
          <p className="job-name"> {this.props.badge.jobTitle} </p>
        </div>
      </div>

            /* <div className="BadgesList">
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
            </div> */
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = useState('');
  const [filteredBadges, setFilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled badge_list">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;