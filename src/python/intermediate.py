#!/usr/bin/python3

import json
import shutil
import string

import pandas

from colour import Color


DLES_FILE = "../lib/data/dles.json"
TAG_COLORS_FILE = "../lib/data/tag_colors.json"
CHANGELOG_JSON = "../lib/data/changelog.json"
CHANGELOG_MD = "../../CHANGELOG.md"
README_MD = "../../README.md"


def sort_tags():
  backup_file(DLES_FILE)
  
  dles = read_dles()
  for dle in dles:
    dle["tags"].sort()
  write_dles(dles)


def sort_dles():
  backup_file(DLES_FILE)

  dles = read_dles()
  dles.sort(key=lambda d: d["name"].lower())
  write_dles(dles)


def backup_file(f):
  shutil.copy(f, f"{f}.bak")


def read_dles():
  with open(DLES_FILE, "r") as f:
    return json.loads(f.read())


def write_dles(d):
  with open(DLES_FILE, "w+") as f:
    f.write(json.dumps(d, indent=2))


def extract_tags(dles):
  return list(set([
    tag for dle in dles 
    for tag in dle["tags"]
  ]))


def word_to_color(word):
  color = ""
  letters = [c.lower() for c in word if c.lower() in string.ascii_lowercase]
  hue = sum(
    string.ascii_lowercase.index(letter) * 26 ** (len(letters) - i - 1)
    for i, letter in enumerate(letters)
  ) / 26 ** len(letters)

  color = Color(hue=hue)
  color.set_saturation(0.4)
  color.set_luminance(0.8)
  return color.hex


def create_tag_colors():
  backup_file(TAG_COLORS_FILE)

  dles = read_dles()
  tags = extract_tags(dles)
  tags.sort()
  tag_colors = { 
    tag: word_to_color(tag)
    for tag in tags
  }

  with open(TAG_COLORS_FILE, "w+") as f:
    f.write(json.dumps(tag_colors, indent=2))


def read_changelog():
  with open(CHANGELOG_JSON, 'r') as f:
    return json.loads(f.read())


def changelog_dles_to_markdown_table(dles):
  for dle in dles:
    name = dle["name"]
    url = dle["url"]
    dle["name"] = f"[{name}]({url})"
    dle["url"] = f"[{url}]({url})"

  df = pandas.DataFrame.from_dict(dles)
  df.index = df.index + 1
  
  return df.to_markdown(index=True)


def last_update_date():
  changelog_json = read_changelog()
  return changelog_json[0]["date"]


def changelog_json_to_md_str():
  changelog_json = read_changelog()

  result = "# Changelog - The Dles\n\n"

  for day in changelog_json:
    result += f"## {day['date']}\n\n"

    if "suggestion form</a>" in day['description']:
      day['description'] = day['description'].replace("/dles/suggest", "https://aukspot.github.io/dles/suggest")

    result += f"{day['description']}\n\n"

    if "dles added" in day:
      result += "dles added: \n"
      result += changelog_dles_to_markdown_table(day["dles added"])
      result += "\n"

    result += "\n"

    if "dles removed" in day:
      result += "dles removed: \n"
      result += changelog_dles_to_markdown_table(day["dles removed"])
      result += "\n"
    
  return result


def create_changelog_md():
  changelog_md_str = changelog_json_to_md_str()
  with open(CHANGELOG_MD, "w+") as f:
    f.write(changelog_md_str)


def dles_to_markdown_table():
  dles = read_dles()

  for dle in dles:
    name = dle["name"]
    url = dle["url"]
    dle["name"] = f"[{name}]({url})"

  df = pandas.DataFrame.from_dict(dles)
  df.drop(['url'], axis=1, inplace=True)
  df.drop(['tags'], axis=1, inplace=True)
  df.index = df.index + 1
  
  return df.to_markdown(index=True)


def write_dles_to_readme_md():
  list_header_str = "## Current list of dles"

  with open(README_MD, 'r') as f:
    before_list_header_str = f.read().split(list_header_str)[0]

  with open(README_MD, 'w') as f:
    f.write(before_list_header_str)
    f.write(list_header_str)
    f.write("\n\n")
    f.write(f"**Last updated `{last_update_date()}`** ([view changelog](https://github.com/aukspot/dles/blob/main/CHANGELOG.md))")
    f.write("\n\n")
    f.write(dles_to_markdown_table())


if __name__ == "__main__":
  # write_dles_to_readme_md()
  pass
