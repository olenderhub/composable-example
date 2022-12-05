import Controller from "@ember/controller";
import { action } from "@ember/object";
import { reject } from "rsvp";

export default class ApplicationController extends Controller {
  @action
  func1() {
    return "it doesn't matter";
  }

  func2() {
    try {
      throw "whatever";
    } catch {
      return reject();
    }
  }

  async asyncFunc2() {
    try {
      throw "whatever";
    } catch {
      return reject();
    }
  }

  @action
  func3() {
    return "it doesn't matter - shouldn't be fired";
  }
}
