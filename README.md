# Multilingual Web Application with Laravel

## Overview

This Laravel project is designed to demonstrate the implementation of multiple languages within a web application. This is useful for creating websites that cater to an international audience, allowing users to switch between languages seamlessly.

In this example, we'll use both Blade templates and JavaScript to handle language changes dynamically.

## Prerequisites

Make sure you have the following installed on your system:

PHP >= 8.0

Composer (<https://getcomposer.org/>)

Node.js (<https://nodejs.org/>)

npm (Node Package Manager, included with Node.js)

Laragon/xampp

## Setup

Clone the repository:

bash

```Copy code
git clone https://github.com/yourusername/your-repo.git
```

Navigate to the project folder:

bash

```Copy code
cd your-repo
```

Install PHP dependencies

bash

```Copy code
composer install
```

Install JavaScript dependencies:

bash

```Copy code
npm install
```

Copy the .env.example file to .env and configure your database settings.

bash

```Copy code
cp .env.example .env
```

Generate the application key:

bash

```Copy code
php artisan key:generate
```

Migrate the database:

bash

```Copy code
php artisan migrate
```

Seed the database (optional):

bash

```Copy code
php artisan db:seed
```

## Usage

Blade Templates

In your Blade templates, you can use the @lang directive to display text in the selected language.

Example:

blade

```Copy code
<p>@lang('messages.welcome')</p>
```

Create language files in the resources/lang directory for each supported language, e.g., en for English and id for Bahasa Indonesia.

## JavaScript

The application uses JavaScript to dynamically switch between languages without reloading the page. The language files are stored in the resources/lang/js directory.

Example:

javascript

```Copy code
// Change language to English
changeLanguage('en');

// Change language to Bahasa Indonesia
changeLanguage('id');
```

Make sure to include the necessary JavaScript file in your Blade layout:

html

```Copy code
<script src="{{ asset('js/language.js') }}"></script>
```

## Artisan Commands

You can use the following Artisan commands to manage languages:

List available languages:

bash

```Copy code
php artisan language:list
```

Add a new language:

bash

```Copy code
php artisan language:add en
```

Remove an existing language:

bash

```Copy code
php artisan language:remove id
```

### Contributing

Feel free to contribute to this project by opening issues or pull requests. Help us make this multilingual Laravel application better!
