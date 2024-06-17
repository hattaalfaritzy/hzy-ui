module.exports = {
  "branches": ["master"],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        "releaseRules": [
          {"type": "feat", "release": "minor"},
          {"type": "fix", "release": "patch"},
          {"type": "perf", "release": "patch"},
          {"type": "revert", "release": "patch"},
          {"type": "docs", "release": "patch"},
          {"type": "style", "release": "patch"},
          {"type": "refactor", "release": "patch"},
          {"type": "test", "release": "patch"},
          {"type": "chore", "release": "patch"},
          {"type": "BREAKING CHANGE", "release": "major"}
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        "preset": "conventionalcommits",
        "presetConfig": {
          "types": [
            {
              "type": "feat",
              "section": ":sparkles: Features",
              "hidden": false
            },
            {
              "type": "fix",
              "section": ":bug: Fixes",
              "hidden": false
            },
            {
              "type": "docs",
              "section": ":memo: Documentation",
              "hidden": false
            },
            {
              "type": "style",
              "section": ":barber: Code-style",
              "hidden": false
            },
            {
              "type": "refactor",
              "section": ":zap: Refactor",
              "hidden": false
            },
            {
              "type": "perf",
              "section": ":fast_forward: Performance",
              "hidden": false
            },
            {
              "type": "test",
              "section": ":white_check_mark: Tests",
              "hidden": false
            },
            {
              "type": "ci",
              "section": ":repeat: CI",
              "hidden": false
            },
            {
              "type": "chore",
              "section": ":repeat: Chore",
              "hidden": false
            }
          ]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ],
    "@semantic-release/npm",
    ["@semantic-release/git", {
      "assets": ["dist/**/*.{js,css,ts}", "docs", "package.json"],
      "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }]
  ]
}