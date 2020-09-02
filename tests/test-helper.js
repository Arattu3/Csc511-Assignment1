import Application from 'assignment-one-final/app';
import config from 'assignment-one-final/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
