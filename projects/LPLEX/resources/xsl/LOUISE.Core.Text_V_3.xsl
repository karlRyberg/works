<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes" omit-xml-declaration="yes" />
  
 <xsl:strip-space elements="span" />

    <xsl:template match="chunk">
      <div>
        <xsl:attribute name="id">
          <xsl:value-of select="@textType"/>_<xsl:value-of select="@instance"/>
        </xsl:attribute>
        <xsl:attribute name="class">
          <xsl:text>moduleChunk</xsl:text>
        </xsl:attribute>
        <xsl:attribute name="data-alias">
          <xsl:value-of select="@alias"/>
        </xsl:attribute>
        <xsl:apply-templates/>
      </div>
    </xsl:template>

  <xsl:template match="body">
    <div>
      <xsl:attribute name="style">
        <xsl:value-of select="@style"/>
      </xsl:attribute>
      <xsl:copy-of select="current()"/>
    </div>
  </xsl:template>

  
</xsl:stylesheet>