import { Controller } from "stimulus"

export default class extends Controller {
  close() {
    setTimeout(() => this.element.remove(), 5000)
    this.element.classList.add("hidden")
  }
}
