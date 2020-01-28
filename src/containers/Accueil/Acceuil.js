import React, { Component } from "react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faDumbbell,
  faBasketballBall,
  faCalendarAlt,
  faHotTub
} from "@fortawesome/free-solid-svg-icons";

import "./Accueil.css";

export default class Accueil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      citations: []
    };
    this.createMarkup = this.createMarkup.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://stadium8.com/wp-json/wp/v2/posts?categories=47&per_page=1")
      .then(posts => {
        this.setState({
          citations: posts.data
        });
      });
    axios
      .get("https://stadium8.com/wp-json/wp/v2/posts/?categories=48")
      .then(posts => {
        this.setState({
          posts: posts.data
        });
      });
  }

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    return (
      <div>
        <div className="container accueil py-5 px-lg-5">
          <div className="row">
            <div className="col-12 text-center mb-3">
              <h3 className="text-white p-0 m-0">
                Bienvenue sur notre site officiel
              </h3>
              <img
                src="./images/logo-white-xl.png"
                alt="STADIUM8"
                title="STADIUM8 - Polideportivo Samara"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 text-white mb-5 mb-lg-0">
              <div className="d-flex-column align-items-center text-center h-100">
                <p className="text-brand">Citation du mois:</p>
                <blockquote className="font-brand-bold font-italic text-center h3">
                  {this.state.citations.map(citation => (
                    <div key={citation.id}>
                      <div
                        dangerouslySetInnerHTML={this.createMarkup(
                          citation.excerpt.rendered
                        )}
                      />
                    </div>
                  ))}
                </blockquote>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-white">
              <div>
                {this.state.posts.map(post => (
                  <div className="text-center" key={post.id}>
                    <h3 className="text-brand">
                      {post.modified.slice(8, 10)}/{post.modified.slice(5, 7)}/
                      {post.modified.slice(0, 4)} - {post.title.rendered}
                    </h3>
                    <div
                      className="font-brand-2"
                      dangerouslySetInnerHTML={this.createMarkup(
                        post.excerpt.rendered
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mb-3">
              <hr className="diviseur mx-auto" />
              <h4 className="text-white">
                Ici, nous proposons les activités & services suivants:
              </h4>
            </div>
            <div className="col-lg-6 text-white text-center pb-4">
              <span className="entete-accueil font-brand-bold">
                <FontAwesomeIcon
                  icon={faFutbol}
                  className="mr-2  align-middle"
                />
                Football5
              </span>
              <p className="lead font-brand text-white pb-3">
                Catégorie de football qui se joue à 5 contre 5
              </p>
            </div>
            <div className="col-lg-6 text-white text-center pb-4">
              <span className="entete-accueil font-brand-bold">
                <FontAwesomeIcon
                  icon={faDumbbell}
                  className="mr-2 align-middle"
                />
                Gymnase
              </span>
              <p className="lead font-brand text-white pb-3">
                Un batiement entier consacré aux Arts Martiaux, à la fitness &
                au bodybuilder!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 text-white text-center pb-4">
              <span className="entete-accueil font-brand-bold">
                <FontAwesomeIcon
                  icon={faBasketballBall}
                  className="mr-2 align-middle"
                />
                Multisport
              </span>
              <p className="lead font-brand text-white pb-3">
                Nous mettons à disposition un terrain à ciel ouvert, pour faire
                du Basket, du Volleyball, du Handball, etc.
              </p>
            </div>
            <div className="col-lg-6 text-white text-center pb-4">
              <span className="entete-accueil font-brand-bold">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 align-middle"
                />
                Évènements
              </span>
              <p className="lead font-brand text-white pb-3">
                Vous avez la possibilité d'organiser des évènements privés en
                réservant à l'avance
              </p>
            </div>
            <div className="col-lg-12 text-white text-center pb-4">
              <span className="entete-accueil font-brand-bold">
                <FontAwesomeIcon
                  icon={faHotTub}
                  className="mr-2 align-middle"
                />
                SPA
              </span>
              <p className="lead font-brand text-white pb-3">
                Et enfin, le SPA est en accès libre & illimité pour tout abonné
                ou détenteur d'un pass à la journée!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
