import * as React from 'react'
import {
  Box,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const footerSections = [
  {
    title: 'Contact Us',
    items: ['Seven Crest', 'Nenagh', 'Ireland', '(+353)899XXXXXX'],
  },
  {
    title: 'About',
    items: ['About Us', 'Contact Us', 'Our Story'],
  },
  {
    title: 'Resource',
    items: [
      'Terms & Conditions',
      'Privacy Policy',
      'Shipping Policy',
      'Cancellation Policy',
    ],
  },
]

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: 'primary.main', color: 'white', pt: 3, pb: 3 }}
    >
      <Box maxWidth="xl" sx={{ mx: 'auto', px: { xs: 2, sm: 8 } }}>
        {/* Top Section: Logo + Social Media */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Grid>
            <Typography variant="body1">Seven Crest</Typography>
          </Grid>
          <Grid>
            <Typography variant="body1">Social Media Icons</Typography>
          </Grid>
        </Grid>

        {/* Footer Sections */}
        <Grid container spacing={2} display={{ sm: 'flex' }}
              justifyContent={{ sm: 'space-between' }}
              width="100%">
          {footerSections.map((section, idx) => (
            <Grid size={{ xs: 12, sm: 'auto' }} key={idx}>
              {/* Accordion on xs */}
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                <Accordion
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    boxShadow: 'none',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  >
                    <Typography
                      sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                    >
                      {section.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box component="ul" sx={{ listStyle: 'none', m: 0 }}>
                      {section.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>

              {/* Regular list on sm+ */}
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Typography
                  sx={{ fontSize: '12px', textTransform: 'uppercase', mb: 1 }}
                >
                  {section.title}
                </Typography>
                <Box component="ul" sx={{listStyle: 'none', m: 0 }}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Copyright */}
        <Grid container justifyContent="center" mt={3}>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            © Copyright
          </Typography>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
