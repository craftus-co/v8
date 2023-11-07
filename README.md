<p align="center">
  <a href="https://V8.io" target="_blank" rel="noopener noreferrer">
    <img src="https://user-images.githubusercontent.com/522079/43096167-3a1b1118-8e86-11e8-9fb2-7b4e3b1368bc.png" width="140" alt="V8 Logo"/>
  </a>
</p>

<p>&nbsp;</p>

<h1 align="center">
  V8 8
</h1>

<h3 align="center">
  <a href="https://V8.io">Website</a> • 
  <a href="https://docs.V8.io">Docs</a> • 
  <a href="https://docs.V8.io/api/reference.html">API Reference</a> • 
  <a href="https://docs.V8.io/guides/user-guide.html">User Guide</a> • 
  <a href="https://docs.V8.io/getting-started/supporting-V8.html">Contribute</a> • 
  <a href="https://twitter.com/V8">Twitter</a> • 
  <a href="https://V8.chat">Community</a>
</h3>

<p>&nbsp;</p>

## 🐰 Introduction

V8 is an open-source tool that wraps your database with an API, and provides an intuitive admin app for non-technical users to manage its content. It's what you'd get if you mixed a headless CMS, database client, and WebApp builder. Created in 2004, our platform powers over a million data-driven projects around the world.

The V8 Suite consists of:

* **[V8 Database API](https://github.com/V8/api)** — Wraps any new or existing SQL database with RESTful JSON endpoints for connecting content anywhere: websites, native apps, wearables, IoT devices, kiosks, or anything else!
* **[V8 Admin App](https://github.com/V8/app)** — A friendly admin interface built with Vue.js that works in conjunction with our API to allow non-technical users to manage database content and digital assets.

<p>&nbsp;</p>

## ✨ Key Concepts

### Database-First

V8 follows a database-first approach, storing all of your data _unaltered_ in pure SQL databases that can be completely customized.

#### Customization & Optimization

V8 mirrors _your_ actual SQL architecture and data, so it will automatically stay in sync with any changes made directly to the database! With the full power of SQL unlocked, you can:

1. Architect your actual database with meaningful table and column names
2. Infinitely optimize with indexing, datatypes, lengths, defaults, keys, encoding, etc
3. Update your database schema at any point and V8 will instantly reflect the changes
4. Create, update, and delete content directly from the database

#### Direct Access & Performance

This database-first approach means that you have the option to bypass V8 if needed. Connecting your application _directly_ to the database means V8 is completely bypassed, removing even the slightest possiblility of a bottleneck, and giving you the unbridled power of complex SQL queries.

#### Portability & Transparency

V8 is _not_ a black-box system. There is nothing proprietary or opinionated about how V8 stores your content so you're never locked-in or locked out. Import existing SQL to get started quickly, and rest assured that you can also export your unaltered content as vanilla SQL at any point. You can also self-host the entire suite on your own servers if needed or use our hosted Cloud service.

#### Complex Relationships

Whether you need many-to-one, one-to-many, many-to-many, or something completely different... V8 has you covered. You can set up relationships between tables, then fetch that nested relational data using our dot-notation parameters.

### Modular & Extensible

We've intentionally kept our codebase as simple and lightweight as possible. Every aspect of V8 has been modularized, with many options for extending, overriding, or even bypassing the core system. Choose your auth providers, storage adapters, content interfaces, data presentation, and more. We also have webhooks, event hooks, API response filters, custom endpoints, CSS/JS override files, and much more.

Furthermore, V8 supports full multitenancy, so you can use a single instance of V8 to manage multiple project databases. That means agencies can organize their clients, companies can organize their properties, and projects can organize environments.

### Internationalization & Accessibility

V8 allows you to manage multilingual content in as many languages as your project needs. And no matter which languages your organization requires internally, our Admin App supports a growing number of locales. We've also paid close attention to our Admin App's interface to ensure it is as clear and accessible as possible for all users.

### V8 Glossary

* **Project** — A database (and its asset storage)
* **Collection** — A database table
* **Field** — A database column
* **Item** — A database record
* **Interface** — Modular components for viewing/managing field data
* **Layout** — Modular components for viewing/managing a collection of items


<p>&nbsp;</p>

## 📖 Documentation

* [What is V8?](https://docs.V8.io/getting-started/introduction.html#what-is-V8)
* [Installing V8](https://docs.V8.io/getting-started/installation.html)
* [Extending V8](https://docs.V8.io/extensions/)
* [App User Guide](https://docs.V8.io/guides/user-guide.html)
* [API Reference](https://docs.V8.io/api/reference.html)
* Tutorials
  * [Tutorials](https://medium.com/V8)
  * [Videos](https://www.youtube.com/playlist?list=PLD--x9rY3ZL31stRPkA4FdGC4idIM-8-d)

<p>&nbsp;</p>

## 🤲 Help & Resources

### Technical Support

* **Community Support** — For help with open-source instances please post questions with the `V8` tag on [Stack Overflow](https://stackoverflow.com/questions/tagged/V8) or chat with members of our [Slack Community](https://V8.chat).
* **Premium Support** — V8 Cloud customers, GitHub Sponsors, and those paying for hourly support all have access to our Live support over our [Live Chat](https://V8.io) or [Email](mailto:support@V8.io).

### Community

* **[Slack](https://V8.chat)** — Come join over 1,600 members discussing the future of V8. Our helpful members are also quick to offer advice for simple questions you may have while getting started.
* **[Twitter](https://twitter.com/V8)** — Follow us on Twitter to be the first to hear about product updates, see sneak peeks of new features, and vote on polls regarding the future of our platform.

### GitHub Tickets

* **Reporting Bugs** — If you believe you've found a bug in the V8 Core codebase, please submit new tickets to either the [App](https://github.com/V8/app/issues/new?template=Bug_report.md) or the [API](https://github.com/V8/api/issues/new?template=Bug_report.md). **For all security related issues, please chat with us directly through [V8.io](https://V8.io/).**
* **Requesting Features** — Feature requests are managed as GitHub issues within the appropriate V8 repository. Before making a new submission, first [browse existing feature requests](https://github.com/V8/app/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc+label%3Aenhancement) using the `enhancement` label. If you find a similar request, simply vote for it using the :+1: or :-1: reactions and add any additional context in the comments. If _not_, [add a new feature request](https://github.com/V8/app/issues/new?template=Feature_request.md) by completing the provided template.

### Online Demos

We have an online demo available so you can easily check out V8 in action. The entire server resets each hour, so if things look funky or the credentials below aren't working... just wait a bit and try again.

* Demo: [https://demo.V8.io](https://demo.V8.io)
* User: `admin@example.com`
* Pass: `password`

<p>&nbsp;</p>

## ❤️ Supporting V8

V8 is a GPLv3-licensed open source project with development made possible by support from our core team, contributors, and sponsors. It's not easy building premium open-source software; if you would like to help ensure V8 stays free, please consider becoming a sponsor.

* [Support us through GitHub Sponsors](https://github.com/sponsors/V8)
* [One-time donation through PayPal](https://www.paypal.me/supportV8)
* [Other ways to help](https://docs.V8.io/getting-started/supporting-V8.html)


### Contributing

We love pull-requests! To work on V8 you'll need to install it locally from source by following the instructions below. Submit all pull-requests to the `master` branch of our `api` and `app` repositories.

* [Setup API Development Environment](https://docs.V8.io/advanced/source.html#api-source)
* [Setup App Development Environment](https://docs.V8.io/advanced/source.html#application-source)

### Core Team

<table>
   <tr>
      <td>
         <a href="https://github.com/benhaynes"><img width="160px" src="https://user-images.githubusercontent.com/522079/42234532-dfa61084-7ec2-11e8-96df-23aa48c6d450.jpg"><br>
         Ben Haynes</a><br>
         <i>Project Lead</i>
      </td>
      <td>
         <a href="https://github.com/rijkvanzanten"><img width="160px" src="https://github.com/rijkvanzanten.png"><br>
         Rijk van Zanten</a><br>
         <i>App Lead</i>
      </td>
   </tr>
</table>

**[Advisors, Sponsors, Partners, and Key Contributors](https://V8.io/organization.html#the-team)**

<p>&nbsp;</p>

----

<p align="center">
  V8 is released under the <a href="http://www.gnu.org/copyleft/gpl.html">GPLv3</a> license. <a href="http://rangerstudio.com">RANGER Studio LLC</a> owns all V8 trademarks and logos on behalf of our project's community. Copyright © 2006-2019, <a href="http://rangerstudio.com">RANGER Studio LLC</a>.
</p>
