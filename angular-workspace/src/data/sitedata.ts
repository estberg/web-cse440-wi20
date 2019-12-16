class SiteData {
  projectSamples = {
    offerings: [
      {
        name: "Autumn 2017",
        key: "autumn2017"
      },
      {
        name: "Winter 2017",
        key: "winter2017"
      },
      {
        name: "Autumn 2015",
        key: "autumn2015"
      },
      {
        name: "Autumn 2014",
        key: "autumn2014"
      }
    ],

    projects: {
      autumn2017: [
        {
          name: "BackTrack",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/",
          suffix: "backtrack"
        },
        {
          name: "Hermes",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/",
          suffix: "hermes"
        },
        {
          name: "Pilltender",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/",
          suffix: "pilltender"
        },
        {
          name: "SimPark",
          link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/",
          suffix: "simpark"
        }
      ],

      winter2017: [
        {
          name: "BookWurm",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/",
          suffix: "bookwurm"
        },
        {
          name: "Dash",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/",
          suffix: "dash"
        },
        {
          name: "Jasper",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/",
          suffix: "jasper"
        },
        {
          name: "Wishing Well",
          link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/",
          suffix: "wishingwell"
        }
      ],

      autumn2015: [
        {
          name: "Balance",
          link: "https://courses.cs.washington.edu/courses/cse440/15au/projects/balance/",
          suffix: "balance"
        },
        {
          name: "Neat",
          link: "https://courses.cs.washington.edu/courses/cse440/15au/projects/neat/",
          suffix: "neat"
        },
        {
          name: "Poliscope",
          link: "https://courses.cs.washington.edu/courses/cse440/15au/projects/poliscope/",
          suffix: "poliscope"
        },
        {
          name: "School View",
          link: "https://courses.cs.washington.edu/courses/cse440/15au/projects/schoolview/",
          suffix: "schoolview"
        }
      ],

      autumn2014: [
        {
          name: "Aqueous",
          link: "https://courses.cs.washington.edu/courses/cse440/14au/projects/aqueous/",
          suffix: "aqueous"
        },
        {
          name: "IEP Connect",
          link: "https://courses.cs.washington.edu/courses/cse440/14au/projects/iepconnect/",
          suffix: "iepconnect"
        },
        {
          name: "Ka-Ching",
          link: "https://courses.cs.washington.edu/courses/cse440/14au/projects/kaching/",
          suffix: "kaching"
        },
        {
          name: "SoundScape",
          link: "https://courses.cs.washington.edu/courses/cse440/14au/projects/soundscape/",
          suffix: "soundscape"
        }
      ]
    }
  };
}

export const site = new SiteData();
