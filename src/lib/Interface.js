import { el, mount } from 'redom';
import Language from './Language';
import Utilities from "./Utilities";
import RemoveCookies from './RemoveCookies';
import WrapperFilter from './WrapperFilter';

export default class Interface {

  constructor() {
    this.elements = {};
  }


  buildStyle() {
    return el('style',
      '#cconsent-bar, #cconsent-bar * { box-sizing:border-box }', 
      '#cconsent-bar { background-color:#435a70; color:#fff; font-size:1rem; line-height:30px; position:fixed; bottom:0; max-width: 832px;left: 50%;right: auto; width:100%; z-index:9998; transform: translateX(-50%);max-height: 100%;overflow-y: auto;}',
      '@media (min-width: 832px) { #cconsent-bar { border-radius: 4px 4px 0 0; }}',
      '#cconsent-bar.ccb--hidden {transform: translateY(100%); display:block;}', 
      '#cconsent-bar .ccb__wrapper {margin:0 auto;padding:48px;}',
      '#cconsent-bar .ccb__left { font-size: 0.889rem; width:100%}',
      '#cconsent-bar .ccb__left .cc-text {font-size: 1.1em;line-height: 1.5;white-space: pre-line;}',
      '#cconsent-bar .ccb__right {width:100%;}',
      '#cconsent-bar .ccb__right .col {color:#FFF; margin-top:20px}',
      '#cconsent-bar a { text-decoration:underline; color:#fff;opacity: 1}',
      '#cconsent-bar .ccb__right a { text-decoration:underline; color:#fff; text-transform: uppercase;font-size: 1rem;font-weight: 600;letter-spacing: 0.1em; }',
      '#cconsent-bar button { background: transparent;border: none;padding: 5px;color: #fff;letter-spacing: 0.1em;font-weight: 600;text-transform: uppercase;font-size: 1rem;display: inline-block;line-height: 1em;margin:0 3px;border: 1px solid #fff;}',
      '#cconsent-bar a.ccb__edit { margin:0 3px;padding: 5px; text-decoration:none;display: inline-block;line-height: 1em;border: 1px solid #fff;}',
      '#cconsent-bar a:hover, #cconsent-bar button:hover { cursor:pointer; }',
      '#cconsent-modal { display:none; width: 100vw; height: 100vh; position:fixed; left:0; top:0; right:0; bottom:0; font-size:1rem; background-color:rgba(0,0,0,0.6); z-index:9999; align-items:center; justify-content:center;}',
      '@media (max-width: 600px) { #cconsent-modal { height: 100% } }',
      '#cconsent-modal h2, #cconsent-modal h3 {color:#333}',
      '#cconsent-modal.ccm--visible {display:flex}',
      '#cconsent-modal .ccm__content { width:100%; height:100%; overflow-Y:auto; background-color:#EFEFEF;padding: 10px; }',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content { max-width:100vw; height:100%; max-height:initial; }}',
      '#cconsent-modal .ccm__content > .ccm__content__heading { border-bottom:1px solid #D8D8D8; padding:35px 35px 20px; background-color:#EFEFEF; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__heading h2 { }',
      '#cconsent-modal .ccm__content > .ccm__content__heading .nl2br {white-space: pre-line;}',
      '#cconsent-modal .ccm__content > .ccm__content__heading .ccm__cheading__close {font-weight:600; color:#888; cursor:pointer; font-size:26px; position: absolute; right:15px; top: 15px;}',
      '#cconsent-modal h2, #cconsent-modal h3 {margin-top:0}',
      '#cconsent-modal .ccm__content > .ccm__content__body { background-color:#FFF;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup {margin:0; border-bottom: 1px solid #D8D8D8; }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head::before { position:absolute; left:35px; font-size:1.4em; font-weight: 600; color:#E56385; content:"×"; display:inline-block; margin-right: 20px;line-height: 1;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.checked-5jhk .ccm__tab-head::before {font-size:1em; content:"✔"; color:#28A834; line-height: 1.5;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge { transition: transform .3s ease-out; transform-origin: 16px 6px 0; position:absolute;right:25px; top:50%; transform:rotate(0deg); transform:translateY(-50%)}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-head .ccm__tab-head__icon-wedge > svg { pointer-events: none; }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head .ccm__tab-head__icon-wedge {transform:rotate(-180deg)}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head {color:#333; padding:17px 35px 17px 56px; margin:0}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content {padding:25px 35px; margin:0}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head { transition: background-color .5s ease-out }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head:hover { background-color:#F9F9F9 }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-head {font-weight:600; cursor:pointer; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup .ccm__tab-content {display:none;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-head { background-color:#F9F9F9 }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {display:flex;}',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tabgroup.ccm__tabgroup--open .ccm__tab-content {flex-direction:column} }',
      '@media (max-width: 600px) { #cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left { margin-bottom:20px; } }',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-component {display:flex; margin-right:35px; align-items:center;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-component > div {font-weight:600;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch-group {width:40px; height:20px; margin:0 10px; position:relative;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch {position: absolute; top:0; right:0; display: inline-block; width: 40px; height: 20px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input {display:none;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch .ccm__switch__slider  {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; border-radius:10px; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch .ccm__switch__slider:before  {position: absolute; content: ""; height: 12px; width: 12px; left: 4px; bottom: 4px; background-color: white; border-radius:50%; -webkit-transition: .4s; transition: .4s;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:checked + .ccm__switch__slider  {background-color: #28A834;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:focus + .ccm__switch__slider  {box-shadow: 0 0 1px #28A834;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__tab-content__left .ccm__switch input:checked + .ccm__switch__slider:before  {-webkit-transform: translateX(20px); -ms-transform: translateX(20px); transform: translateX(20px);}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content h3 {font-size:18px; margin-bottom:10px; line-height:1;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content p {color:#444; margin-bottom:0}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list:not(:empty) {margin-top:30px;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list .ccm__list__title {color:#333; font-weight:600;}',
      '#cconsent-modal .ccm__content > .ccm__content__body .ccm__tab-content .ccm__list ul { margin:15px 0; padding-left:15px }',
      '#cconsent-modal .ccm__footer { padding:35px; background-color:#EFEFEF; text-align:center; display: flex; align-items:center; justify-content:flex-end; }',
      '#cconsent-modal .ccm__footer button { cursor:pointer; }',
      '#cconsent-modal .ccm__footer button:hover {  }'
      );
  }
//'<a href="#" class="close m-3"><i class="fa fa-times"></i></a>'
  buildBar() {
    return el('section#cconsent-bar.ccb--hidden',
        el(`a.close.m-3.consent-refuse`, { href: '#', tabindex: 0, title: Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnRefuseAll') },
          el(`i.fa.fa-times`),
          el(`span.d-none`, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnRefuseAll')),
        ),
        el(`div.ccb__wrapper`,
          el('div.ccb__left',
            el('div.cc-text',
                el('p.mb-1', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barMainText')),
                el('p.m-0.cookie-policy-link', (window.CookieConsent.config.modalMainTextMoreLink) ? el('a', { href: window.CookieConsent.config.modalMainTextMoreLink }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'learnMore')) : null)
            ),
          ),
          el('div.ccb__right',
            el('div.ccb__button.row',
              el('div.col-xs-12.col-md-4.text-center.mt-4',
                 el('button.consent-refuse', { tabindex: 0 }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnRefuseAll'))
              ),
              el('div.col-xs-12.col-md-4.text-center.mt-4',
                el('a.ccb__edit', { href: '#', tabindex: 0 }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barLinkSetting'))
              ),
              el('div.col-xs-12.col-md-4.text-center.mt-4',
                el('button.consent-give', { tabindex: 0 }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'barBtnAcceptAll'))
              )
            )
          )
        ),
      );
  }

  buildModal() {

    // Cookie names list middleware
    var listCookies = function(category) {
      var list = [];

      for(let service in window.CookieConsent.config.services) {
        (window.CookieConsent.config.services[service].category === category) && list.push(window.CookieConsent.config.services[service]);
      }
      
      if(list.length) {
        
        var listItems = [];
        
        for(let item in list) {
          listItems.push(el('li', Language.getTranslation(list[item], window.CookieConsent.config.language.current, 'name')));
        }

        return [el('div.ccm__list', el('span.ccm__list__title', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalAffectedSolutions')), el('ul', listItems))];
      }
    }
    
    function modalTabGroups() {

      let contentItems = [];

      let i = 0;
      for (let key in window.CookieConsent.config.categories) {

        contentItems.push(el('dl.ccm__tabgroup' + '.' + key + ((window.CookieConsent.config.categories[key].checked) ? '.checked-5jhk' : ''), {'data-category':key},
                            el('dt.ccm__tab-head', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name'),
                              el('a.ccm__tab-head__icon-wedge', { href: '#', tabindex: 0, title: '(Un)check' },
                                el(function(){ return document.createElementNS("http://www.w3.org/2000/svg", "svg")}, { version: "1.2", preserveAspectRatio: "none", viewBox: "0 0 24 24", class: "icon-wedge-svg", "data-id": "e9b3c566e8c14cfea38af128759b91a3", style: "opacity: 1; mix-blend-mode: normal; fill: rgb(51, 51, 51); width: 32px; height: 32px;"},
                                  el(function(){ return document.createElementNS("http://www.w3.org/2000/svg", "path")}, { 'xmlns:default': "http://www.w3.org/2000/svg", class: "icon-wedge-angle-down", d: "M17.2,9.84c0-0.09-0.04-0.18-0.1-0.24l-0.52-0.52c-0.13-0.13-0.33-0.14-0.47-0.01c0,0-0.01,0.01-0.01,0.01  l-4.1,4.1l-4.09-4.1C7.78,8.94,7.57,8.94,7.44,9.06c0,0-0.01,0.01-0.01,0.01L6.91,9.6c-0.13,0.13-0.14,0.33-0.01,0.47  c0,0,0.01,0.01,0.01,0.01l4.85,4.85c0.13,0.13,0.33,0.14,0.47,0.01c0,0,0.01-0.01,0.01-0.01l4.85-4.85c0.06-0.06,0.1-0.15,0.1-0.24  l0,0H17.2z", style: "fill: rgb(51, 51, 51);" })
                                )
                              ),
                            ),
                            el('dd.ccm__tab-content',
                              el('div.ccm__tab-content__left', 
                                ( ! window.CookieConsent.config.categories[key].needed) && el('div.ccm__switch-component', el('div.status-off', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'off')),
                                el('div.ccm__switch-group',
                                  el('label.ccm__switch',
                                    el('input.category-onoff', {type:'checkbox', 'data-category': key, 'checked': window.CookieConsent.config.categories[key].checked}),
                                    el('span.ccm__switch__slider')
                                  )
                                ),
                                el('div.status-on', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'on')))
                              ),
                              el('div.right',
                                el('h3', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'name')),
                                el('p', Language.getTranslation(window.CookieConsent.config.categories[key], window.CookieConsent.config.language.current, 'description')),
                                el('div.ccm__list',
                                  listCookies(key)
                                )
                              )
                            )
                          )
                        );

        i++;
      }

      return contentItems;
    }

    return el('div#cconsent-modal',
      el('div.ccm__content',
        el('div.ccm__content__heading',
          el('h2', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainTitle')),
          el('p.nl2br', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalMainText')),
          el('p.cookie-policy-link',  (window.CookieConsent.config.modalMainTextMoreLink) ? el('a', { href: window.CookieConsent.config.modalMainTextMoreLink }, Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'learnMore')) : null),
          el('div.ccm__cheading__close', '×')
        ),
        el('div.ccm__content__body',
          el('div.ccm__tabs',
            modalTabGroups()
          )
        ),
        el('div.ccm__footer.row',
          el('div.col-xs-12.col-md-4.mb-2',
            el('button.consent-refuse.btn.btn-md.btn-info', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnRefuseAll'))
          ),
          el('div.col-xs-12.col-md-4.mb-2',
            el('button#ccm__footer__consent-modal-submit.btn.btn-md.btn-info', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnSave'))
          ),
          el('div.col-xs-12.col-md-4.mb-2',
            el('button.consent-give.btn.btn-md.btn-info', Language.getTranslation(window.CookieConsent.config, window.CookieConsent.config.language.current, 'modalBtnAcceptAll'))
          )
        )
      )
    );
  }

  modalRedrawIcons() {
    var tabGroups = this.elements['modal'].querySelectorAll('.ccm__tabgroup');

    for(let tabGroup of tabGroups) {
      if(window.CookieConsent.config.categories[tabGroup.dataset.category].checked) {
        if( ! tabGroup.classList.contains('checked-5jhk')) {
          tabGroup.classList.add('checked-5jhk');
          tabGroup.querySelector('input.category-onoff').checked = true;
        }
      } else {
        if(tabGroup.classList.contains('checked-5jhk')) tabGroup.classList.remove('checked-5jhk');
        tabGroup.querySelector('input.category-onoff').checked = false;
      }
    }
  }

  render(name, elem, callback) {
    if (typeof callback === 'undefined') callback = function(){};
    if (typeof this.elements[name] !== 'undefined') {
      this.elements[name].parentNode.replaceChild(elem, this.elements[name]);
      this.elements[name] = elem;
      callback(elem);
      return elem;
    } else {
      var insertedElem = mount(document.body, elem);
      if (insertedElem) {
        this.elements[name] = insertedElem;
      }
      callback(insertedElem);
      return insertedElem;
    }
  }

  buildInterface(callback) {

    if (typeof callback === 'undefined') callback = function(){};
    var that = this;

    Utilities.ready(function() {

      that.render('style', that.buildStyle());

      that.render('bar', that.buildBar(), (bar) => {

        // Show the bar after a while
        if ( ! window.CookieConsent.config.cookieExists) {
          setTimeout(() => {
            bar.classList.remove('ccb--hidden');
          }, window.CookieConsent.config.barTimeout);
        }
      });

      that.render('modal', that.buildModal());

      callback();
    });
  }

  addEventListeners(elements) {

    // If you click Accept all cookies
    var buttonConsentGive = document.querySelectorAll('.consent-give');

    for(let button of buttonConsentGive) {
      button.addEventListener('click', () => {
  
        // We set config to full consent
        for(let key in window.CookieConsent.config.categories) {
          window.CookieConsent.config.categories[key].wanted =
          window.CookieConsent.config.categories[key].checked = true;
        }
        
        this.writeBufferToDOM();
  
        this.buildCookie((cookie) => {
          this.setCookie(cookie);
        });
  
        this.elements['bar'].classList.add('ccb--hidden');
        this.elements['modal'].classList.remove('ccm--visible');

        this.modalRedrawIcons();
  
      });
    }

    // If you click Accept all cookies
    var buttonConsentRefuse = document.querySelectorAll('.consent-refuse');

    for(let button of buttonConsentRefuse) {
      button.addEventListener('click', () => {

        // We set config to full consent
        for(let key in window.CookieConsent.config.categories) {
          if (!window.CookieConsent.config.categories[key].needed) {
            window.CookieConsent.config.categories[key].wanted =
                window.CookieConsent.config.categories[key].checked = false;
          }
        }

        this.writeBufferToDOM();

        this.buildCookie((cookie) => {
          this.setCookie(cookie);
        });

        this.elements['bar'].classList.add('ccb--hidden');
        this.elements['modal'].classList.remove('ccm--visible');

        this.modalRedrawIcons();

      });
    }


    // If you click Cookie settings and open modal
    Array.prototype.forEach.call(document.getElementsByClassName('ccb__edit'), (edit) => {
      edit.addEventListener('click', () => {
        this.elements['modal'].classList.add('ccm--visible');
      });
    });

    // If you click trough the tabs on Cookie settings
    // If you click on/off switch
    this.elements['modal'].querySelector('.ccm__tabs').addEventListener('click', (event) => {

      // If you click trough the tabs on Cookie settings
      if (event.target.classList.contains('ccm__tab-head') || event.target.classList.contains('ccm__tab-head__icon-wedge')) {

        function getDlParent(eventTarget) {
          var parent = eventTarget.parentNode;
          if(parent.nodeName !== 'DL') {
            return getDlParent(parent);
          } else {
            return parent;
          }
        }
        
        var parentDl = getDlParent(event.target);
        
        if(parentDl.classList.contains('ccm__tabgroup--open')) {
          parentDl.classList.remove('ccm__tabgroup--open');
        } else {
          parentDl.classList.add('ccm__tabgroup--open');
        }
      }

      // If you click on/off switch
      if (event.target.classList.contains('category-onoff')) {
        window.CookieConsent.config.categories[event.target.dataset.category].wanted =
        window.CookieConsent.config.categories[event.target.dataset.category].checked = event.target.checked === true;

        var dt = document.querySelector('.ccm__tabgroup.' + event.target.dataset.category);
        if(event.target.checked === false && dt.classList.contains('checked-5jhk')) {
          dt.classList.remove('checked-5jhk');
        } else {
          dt.classList.add('checked-5jhk');
        }
      }
    });

    // If you click close on open modal
    this.elements['modal'].querySelector('.ccm__cheading__close').addEventListener('click', (event) => {
      this.elements['modal'].classList.remove('ccm--visible');
    });

    // If you click submit on cookie settings
    document.getElementById('ccm__footer__consent-modal-submit').addEventListener('click', () => {

      let switchElements = this.elements['modal'].querySelectorAll('.ccm__switch input');

      Array.prototype.forEach.call(switchElements, (switchElement) => {
        window.CookieConsent.config.categories[switchElement.dataset.category].wanted = switchElement.checked;
      });

      this.buildCookie((cookie) => {
        this.setCookie(cookie, () => {
          this.elements['modal'].classList.remove('ccm--visible');
          this.elements['bar'].classList.add('ccb--hidden');
        });
      });

      this.writeBufferToDOM();

    });
  }

  writeBufferToDOM() {

    for(let action of window.CookieConsent.buffer.appendChild) {
      if (window.CookieConsent.config.categories[action.category].wanted === true) {
        Node.prototype.appendChild.apply(action.this, action.arguments);
      }
    }

    for(let action of window.CookieConsent.buffer.insertBefore) {
      if (window.CookieConsent.config.categories[action.category].wanted === true) {
        action.arguments[1] = (action.arguments[0].parentNode === null) ? action.this.lastChild : action.arguments[1];
        Node.prototype.insertBefore.apply(action.this, action.arguments);
      }
    }
  }

  buildCookie(callback) {
    let cookie = {
      version: window.CookieConsent.config.cookieVersion,
      categories: {},
      services: []
    };
    
    for(let key in window.CookieConsent.config.categories) {
      cookie.categories[key] = {
        wanted: window.CookieConsent.config.categories[key].wanted,
      };
    }

    cookie.services = Utilities.listGlobalServices();
  
    if (callback) callback(cookie);
    return cookie;
  }
  
  setCookie(cookie, callback) {
    const expires_in = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toUTCString();

    document.cookie = `cconsent=${JSON.stringify(cookie)}; expires=${expires_in}; path=/; samesite=strict; secure;`;

    const removeCookies = new RemoveCookies();
    removeCookies.init();

    if (callback) callback();

    const event = new CustomEvent('cconsent-setCookie', { detail: cookie });
    window.dispatchEvent(event);
  }
}
