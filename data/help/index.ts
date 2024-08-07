import { HelpCategoriesType } from "@/context/HelpProvider"
import { TASK_MANAGEMENT_HELP } from "../task-management/task-management"
import { COCONUTS_HELP } from "./coconuts/coconuts"
import { FAKE_STORE_HELP } from "../fake-store-help"

export const HELP_CATEGORIES: HelpCategoriesType = {
  'task-management': TASK_MANAGEMENT_HELP,
  'coconuts': COCONUTS_HELP,
  'fake-store': FAKE_STORE_HELP
}